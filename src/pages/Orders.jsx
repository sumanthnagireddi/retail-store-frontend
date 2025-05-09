import { EllipsisHorizontalCircleIcon, EllipsisVerticalIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { EllipsisHorizontalIcon, EyeIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TABS = [
  { label: "All", value: "all" },
  { label: "Processing", value: "processing" },
  { label: "Delivered", value: "delivered" },
];

const TABLE_HEAD = [
  "Order ID",
  "User",
  "Total Items",
  "Total Price",
  "Payment Method",
  "Status",
  "Created At",
  "",
];

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/orders");
        if (!response.ok) throw new Error("Failed to fetch orders");
        const data = await response.json();
        setOrders(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Card className="h-full border-2 w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Orders List
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all orders
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button variant="outlined" size="sm">
              Export
            </Button>
            <Button className="flex items-center gap-3" size="sm">
              + New Order
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value="all" className="w-full md:w-max">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72">
            <Input
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
        </div>
      </CardHeader>

      <CardBody className="overflow-auto px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => {
              const isLast = index === orders.length - 1;
              const classes = isLast ? "px-4 py-2" : "px-4 py-2 border-b border-blue-gray-50";

              return (
                <tr key={order._id}>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      <Link className="text-blue-600 font-medium ">
                      #{order._id.slice(-6).toUpperCase()}
                      </Link>
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                    <Link className="text-blue-600 font-medium ">
                      #{order.user.slice(-6).toUpperCase()}
                      </Link>
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {order.orderItems?.length || 0}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      ₹{order.totalPrice.toFixed(2)}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {order.paymentMethod}
                    </Typography>
                  </td>
                  <td className={''}>
                    <Chip
                    className="w-fit"
                      variant="ghost"
                      size="sm"
                      value={order.orderStatus}
                      color={
                        order.orderStatus === "Delivered"
                          ? "green"
                          : order.orderStatus === "Cancelled"
                          ? "red"
                          : "blue"
                      }
                    />
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Tooltip content="Action">
                      <IconButton variant="text">
                        <EllipsisVerticalIcon className="h-6 w-6" />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>

      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 1
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
