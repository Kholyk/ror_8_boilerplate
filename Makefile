install:
	bundle install
lint:
	bundle exec rubocop && bundle exec slim-lint app/views/
test:
	bundle exec rake test
.PHONY: test
slim-lint:
	bundle exec slim-lint app/views/
setup:
	bin/setup
	bin/rails db:seed
	yarn

start:
	bin/dev

console:
	bin/rails console
