---
title: "Self-learn Solidity & Smart Contract"
date: "2020-08-10"
---

# Solidity 

Is a strictly-typed language

## Support inheritance

```solidity
contract B is A {

}
```
## Support primitives type:

### uint
- uint256 by default, uint8, uint16

### string

- cannot compare string normally, need to convert back to hash form to compare

```solidity
// this keccak256 is SHA3
keccak256(someOperator(string1)) == keccak256(someOperator(string2))
```

## Support special type

### address
- the unique address in the blockchain

## modifier

### built-in modifier

- public
- private
- external
- internal
- view (a pure/read-only function - does not modify anything)



### custom modifier
- it is a function, but with special syntax and usage

declaration
```solidity
modifier isOwner() {
    require(_isOwner());
    _;
}
```

usage
```solidity
function aFuncUseIsOwner() public isOwner {

}
```
## function

### function can return multiple value
unlike many modern language like Javascript, Java... 
Like Go, Solidity can return multiple value in a function

## struct


## interface
### declaration
- Like the contract declaration, but not have the scope/ execution block

## memory allocation

In blockchain & solidity, memory is cheaper than storage, unlike the other programming language

### memory

### storage


## how to 
### update your smart contract
In fact, smart contract cannot be changed after deployed.
Then, we need to make the important part of the smart contract configurable & mutable through the `external` or `public` function.
In Blockchain, security is the most important aspect that we should care, as anyone can understand your code, so it's exploitable. Always have security awareness in blockchain.
Some key Solidity features offer to protect, improve security:
    - custom modifier
        - example: `onlyOwner`
    - transfer owner utils from `OpenZeppelin`
    - set the owner when the smart contract is created (by using the constructor)
### save your gas
Gas is converted from ETH. When you run your smart contract, all the nodes from the network need to run & verify the results across. Running the function on the heavy & slow network like ETH can be expensive, if there's anyone that abuse the network, they have to pay a lot of money, that's the story. 

#### using the view function
As `view` function does not mutate, update the `storage` or `blockchain`, it's less cost than the other type. If a function is `external view`, it's free. But if the `view` function is called from another `public`, `private` ... , it's still costly.

#### manipulate array using `memory` cloning instead of directly using the `storage`

