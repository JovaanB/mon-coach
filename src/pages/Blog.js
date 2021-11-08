import { Link as RouterLink } from "react-router-dom";
import { Grid, Button, Container, Stack, Typography } from "@mui/material";
import Page from "../components/Page";
import {
  BlogPostCard,
  BlogPostsSort,
  BlogPostsSearch,
} from "../components/_dashboard/blog";
import POSTS from "../_mocks_/blog";
import { PlusOneOutlined } from "@mui/icons-material";

const SORT_OPTIONS = [
  { value: "latest", label: "Récents" },
  { value: "popular", label: "Populaire" },
  { value: "oldest", label: "Anciens" },
];

export const Blog = () => {
  return (
    <Page title="Dashboard: Blog | Mon Coach">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Blog
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="#"
            startIcon={<PlusOneOutlined />}
          >
            Nouvel article
          </Button>
        </Stack>

        <Stack
          mb={5}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <BlogPostsSearch posts={POSTS} />
          <BlogPostsSort options={SORT_OPTIONS} />
        </Stack>

        <Grid container spacing={3}>
          {POSTS.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </Grid>
      </Container>
    </Page>
  );
};
