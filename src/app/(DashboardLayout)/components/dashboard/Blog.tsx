import React from "react";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";
import Image from "next/image";
import "../../../global.css";

import user1 from "public/images/backgrounds/u2.jpg";
import user2 from "public/images/backgrounds/u3.jpg";
import user3 from "public/images/backgrounds/u4.jpg";

const blogs = [
  {
    img: user1,
    title: "Welcome, Alice!",
    subtitle:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    btncolor: "primary.main",
  },
  {
    img: user2,
    title: "Welcome, Bob!",
    subtitle:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    btncolor: "primary.main",
  },
  {
    img: user3,
    title: "Welcome, Charlie!",
    subtitle:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    btncolor: "primary.main",
  },
];

const BlogCard = () => {
  return (
    <Grid container spacing={3}>
      {blogs.map((blog, index) => (
        <Grid
          key={index}
          item
          xs={12}
          lg={4}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <Card
            sx={{
              p: 0,
              width: "100%",
            }}
          >
            <div className="image-with-mask">
              <Image
                src={blog.img}
                alt="img"
                style={{ width: "100%", height: "250px", objectFit: "cover" }}
              />
              <div className="gradient-mask" />
            </div>
            <CardContent
              sx={{
                paddingLeft: "30px",
                paddingRight: "30px",
              }}
            >
              <Typography variant="h2">{blog.title}</Typography>
              <Typography
                color="textSecondary"
                mt={1}
                fontSize="14px"
                fontWeight={400}
              >
                {blog.subtitle}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mt: "15px",
                  backgroundColor: blog.btncolor,
                  "&:hover": {
                    backgroundColor: blog.btncolor,
                  },
                }}
              >
                More Info
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BlogCard;
