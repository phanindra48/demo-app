# Steps to run the demo app

## Prerequisites

## To restore DB dump

```mysql
mysql -uroot chad < /file/path/chad.sql
```

## Clone the project
`git clone https://github.com/phanindra48/demo-app`

## Install packages

```bash
yarn

(or)

npm install
```

## Run

```bash
export PORT=5200 && yarn start
```

## Test

```bash
open http://localhost:5200
```

## Sample API

```
open http://localhost:5200/api/users
```
