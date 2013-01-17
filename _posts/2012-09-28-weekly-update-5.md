---
title: Weekly Update &#35;5
description: Weekly Update &#35;5
layout: post
author: Clay Johnson
comments: false
sharing: true
category: weekly-update
tags:
  - weekly updates
published: true
---

Let's get the bad news out of the way first: this week will mark the first week where we haven't shipped any *new* software. The focus of RFP-EZ shifted this week, as we stopped gathering the infrastructural data that we need to build our product (all the [APIs](https://github.com/presidential-innovation-fellows/rfpez-apis) and [utilities](https://github.com/presidential-innovation-fellows/FormTimer) we've released) and started building the suite of applications we described in our [spec](http://presidential-innovation-fellows.github.com/rfpez-blog/2012/09/21/weekly-update-4/).

We're building our applications on a framework called [Laravel](http://laravel.com), which is written in PHP. Before you haters start groaning about PHP, think about it: we are building an open source application for procurement. We want our software to be used far and wide, across multiple agencies, across multiple governments, and in multiple kinds of environments. Not every federal and municipal agency is ready to install and maintain NodeJS on their FISMA certified machines. But they've all already got PHP installed.

On top of the deployability that PHP buys us, Laravel is a fairly opinionated framework that helps us write good apps fast. A few weeks ago, before the fellowship technically began, the three of us wrote [MorningCheckin](https://github.com/cjoh/morning-checkin) on it, and while we had our ups and downs it's a great framework that does what we need it to do and not much more.

The best part of the Presidential Innovation Fellowship is its access to coaches. To that end, when we decided a few weeks back to start using Laravel, we knew we'd need Laravel's creator, [Taylor Otwell](https://twitter.com/taylorotwell) to come help us out. This week, he did, and we were happy to contribute to the [project](https://twitter.com/laravelphp/status/251308200194875392) with his guidance.

Jed's up in New York this weekend, giving the RFP-EZ dog and pony show to the folks up there, and Adam spent some serious time upgrading [FormTimer](https://github.com/presidential-innovation-fellows/FormTimer) to something a lot more usable. Next week? Big demo time -- we've invited 20 people from inside the government to take a look at what we're building in terms of internal-tools to give us feedback, and it's our plan to shift to doing public releases every *other* Friday from here on out. Starting next week.

Onward!

Clay, Jed, Adam, Ahson and the RFP-EZ team