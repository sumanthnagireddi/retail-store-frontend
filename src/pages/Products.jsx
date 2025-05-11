import {
    MagnifyingGlassIcon,
    EllipsisVerticalIcon,
  } from "@heroicons/react/24/outline";
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
import Loader from "../components/Loader";
  
  const TABS = [
    { label: "All", value: "all" },
    { label: "Published", value: "published" },
    { label: "Unpublished", value: "unpublished" },
  ];
  
  const TABLE_HEAD = [
    "Product Name",
    "Price",
    "Stock",
    "Category",
    "Brand",
    "Published",
    "Created At",
    "",
  ];
  
  export default function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch("http://localhost:3000/api/products");
          if (!response.ok) throw new Error("Failed to fetch products");
          const data = await response.json();
          setProducts(data?.data);
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      };
      fetchProducts();
    }, []);
  
    if (loading) return <div><Loader/></div>;
    if (error) return <div>Error: {error}</div>;
  
    return (
      <Card className="h-full border-2 w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Products List
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                View and manage all products
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button variant="outlined" size="sm">
                Export
              </Button>
              <Button className="flex items-center gap-3" size="sm">
                + New Product
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
              {products.map((product, index) => {
                const isLast = index === products.length - 1;
                const classes = isLast
                  ? "px-4 py-2"
                  : "px-4 py-2 border-b border-blue-gray-50";
  
                return (
                  <tr key={product._id}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        <Link className="text-blue-600 font-medium">
                          {product.name}
                        </Link>
                      </Typography>
                    </td>
                    <td className={classes}>
                      ₹{product.price.toFixed(2)}
                    </td>
                    <td className={classes}>
                      {product.stock}
                    </td>
                    <td className={classes}>
                      {product.category}
                    </td>
                    <td className={classes}>
                      {product.brand}
                    </td>
                    <td className={classes}>
                      <Chip
                        className="w-fit"
                        variant="ghost"
                        size="sm"
                        value={product.isPublished ? "Published" : "Unpublished"}
                        color={product.isPublished ? "green" : "red"}
                      />
                    </td>
                    <td className={classes}>
                      {new Date(product.createdAt).toLocaleDateString()}
                    </td>
                    <td className={classes}>
                      <Tooltip content="Actions">
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
  