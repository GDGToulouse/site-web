## Local

https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/

```shell
ruby --version
# If you don't have Ruby installed, install Ruby 2.1.0 or higher.
gem install bundler
# Installs the Bundler gem
bundle install
```

Run the Webserver:

```
bundle exec jekyll serve
```

Preview your local Jekyll site in your web browser at http://localhost:4000.

## Events

Generate:

```shell
yarn # or `npm i`
cp generate_events.dist.js generate_events.js
# Add Meetup token
npm run build:events
```