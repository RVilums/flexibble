import { g, auth, config } from "@grafbase/sdk";

const User = g.model("User", {
  name: g.string().length({ min: 2, max: 20 }),
  email: g.string().unique(),
  avatar: g.url(),
  description: g.string(),
  github: g.url().optional(),
  linkedin: g.url().optional(),
  projects: g
    .relation(() => Project)
    .list()
    .optional(),
});

const Project = g.model("Project", {
  title: g.string().length({ min: 3 }),
  description: g.string(),
  image: g.url(),
  liveSiteUrl: g.url(),
  githubUtr: g.url(),
  category: g.string().search(),
  createdBy: g.relation(() => User),
});

export default config({
  schema: g,
});
