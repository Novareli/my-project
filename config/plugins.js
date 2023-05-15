module.exports = ({ env }) => ({
  // ...
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        blog: {
          //write what your collection type's name is this case we should use "blog"
          field: "slug",
          references: "title",
        },
      },
    },
  },
  // ...
});
