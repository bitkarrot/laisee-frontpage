---
title: 'How Laisee work'
excerpt: 'Lightning Laisee leverage the power of the Lightning Network to make it easy to gift money to anyone. Until they are withdrawn, the satoshi you gift are kept on our custodial wallet. Alternatively, you can run your own wallet on a node to which you have the keys.'
coverImage: '/assets/blog/explanation/banner.png'
date: '2021-01-01T12:49:07.322Z'
author:
  name: Bitcoin Association of Hong Kong
  picture: '/assets/blog/authors/bahk.png'
ogImage:
  url: '/assets/blog/explanation/explanation.png'
---

Lightning Laisee make use of several technologies. All components of the Lightning Laisee are open source.

## The Laisee

Lightning Laisee typically come in the form of png files, printed on paper or as NFC cards. The actual Laisee is a LNURL, which looks like this:

`LNURL1DP68GURN8GHJ7UM9DEJZUMRPD9EK2EFWDAEXWTMHD96XSERJV9MJ7CTSDYHHVVF0D3H82UNV9AJKU3M42YM4S7J8FF9XJNRWXFEKUUMS89V9QD9NA3J`

A LNURL is a bech32 encoded URL, pre-fixed with LNURL. We can use a [decoder](https://lnurl.fiatjaf.com/codec/) to get the URL embedded in it: [`https://send.laisee.org/withdraw/api/v1/lnurl/enGuQ7XzGJJiLn2snsp9XP`](https://send.laisee.org/withdraw/api/v1/lnurl/enGuQ7XzGJJiLn2snsp9XP).

Opening the page in a web browser today will tell you that this Laisee has already been redeemed (ERROR: "Withdraw is spent."), but the first person to scan the QR code will see its contents:

```
{
  "callback": "https://send.laisee.org/withdraw/api/v1/lnurl/cb/enGuQ7XzGJJiLn2snsp9XP", 
  "defaultDescription": "Happy New Year", 
  "k1": "7jxPR4nHhjEj8WxceFZ2aE", 
  "maxWithdrawable": 1000000, 
  "minWithdrawable": 1000000, 
  "tag": "withdrawRequest"
}
```

This tells us that the LNURL represents a withdrawal over 1 million milli-satoshi, or 1000 satoshi. Your Lightning wallet can now call the API above, present the key k1 and request the 1000 satoshi withdrawal together with a Lightning invoice. Once approved, the satoshi will be sent to your wallet from our node.

## The Lightning Node

Laisee.org runs LND. You can find our node at [02e64da75794703de72e9a8d6394747bc40fd72d0121c5dda6c1bd845939e30bb7](https://terminal.lightning.engineering/#/02e64da75794703de72e9a8d6394747bc40fd72d0121c5dda6c1bd845939e30bb7) both on @172.81.179.14:9735 and 235p6kn5odzvuvx4qmrzdf47xh2pjzfw36rnhbguzl3ym4ebcfodjuyd.onion:9735. Feel free to connect!

When we create our Laisee, we first have to fund this node with the appropriate amount of satoshi. All funds are held in this node until they are withdrawn by the recipient to a wallet to which they alone control the keys.

To manage our Laisee, we use [LNBits](https://lnbits.com/). We also have [scripts](https://github.com/bitkarrot/lntools) to help us with creating Laisee in bulk.

**[Read more: How to make your own Laisee](/posts/send)**
