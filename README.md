Related microsoft/playwright#4546

## Test Results

Before testing the commands below, please start a test server via `yarn serve`:

```
# passed
$ yarn test --param browserName=chromium

# passed
$ yarn test --param browserName=webkit

# failed
$ yarn test --param browserName=firefox
```

## Problem

It seems that Firefox can't handle the second dialog which includes the additional text "Prevent this page from creating additional dialogs".
