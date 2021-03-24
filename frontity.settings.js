const settings = {
  "name": "infoerrores",
  "state": {
    "frontity": {
      "url": "https://wp.infoerrores.com",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "infoerrores-theme",
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://wp.infoerrores.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/head-tags"
    /* "@frontity/yoast", */
  ]
};

export default settings;
