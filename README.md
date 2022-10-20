# blockservTimestamp project

## Creation

```
cd blockservTimestamp

truffle unbox react

git add .
git commit -m "[INIT]"
git branch -M main
git remote add origin git@github.com:Celenium-blockserv/blockservTimestamp.git
git push -u origin main

```

# Deploying new version

## Update dev env

```
git status
git pull
```

## Test new smart contract

```
cd truffle
truffle compile

```

Start ganache
Check in the ``truffle-config.js`` that the right port is specified ( 8545 ou 7545)

```
truffle migrate
```

Launch client

```
cd client
npm install
npm run start
```

Then import in metamask the ganache private key that was used to deploy the smart contract and test...

## Deployement on Polygon

### Configure an Infura Key

On [Infura](http://infura.io) in the Profile/Manage Plan section.
Activate the Network Add-on:  Polygon PoS ( BETA)

Check that you have MATICs on your account in metamask

```
cat .env
INFURA_ID=  <YOUR INFURA API KEY>
MNEMONIC= <mnemonic>
```

```
cd truffle
truffle migrate --network polygonmainnet
```




## Build gh-pages


```
cd client
npm run build
npm run deploy

```
https://raven254.github.io/Projet-4_Marketplace_NFT/

https://Celenium-blockserv.github.io/blockservTimestamp 