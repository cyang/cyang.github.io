---
layout: post
title: Let's Go without Node
subtitle: Predicting a 2016 Web Trend
markdown: kramdown
---


Web developers are beginning to switch from Node.js to a much better language, Go, for server development.

The Go programming language is an open-source language developed by Google for not only web servers, but also for many other general-purpose applications. In addition, Go has the potential to even replace Java in the future for Android development because of one of its recent update, similar to how Swift had replaced Objective-C for iOS development.

Although it is great for creating applications with real-time networking capabilities, Node.js suffers from maintainability issues on large-scale Javascript applications, the lack of error-handling/debugging capabilities, and **“callback hell”**, which most users experience when learning to comprehend asynchronous callback functions.

### Callback example:

{% highlight javascript linenos %}
foo1(function(param1){
    // Do something
    console.log("Let's go deeper")
    foo2(function(param2){
        // Do something
        console.log("This is being called asynchronousously");
        foo3(function(param3){
            // Do something
            console.log("THIS IS NOT GOOD!");
            foo4(function(param4){
                // Do something
                console.log("Ok I give up; I'm lost in my own code");
            });
        });
    });
});

{% endhighlight %}

![Callback hell](http://home.iitk.ac.in/~bhanuc/Deck%20Title_files/1j6gAIn.jpg)

Go is capable of handling the all of the tasks Node.js can do and so much more. Given that it is roughly the same age as Node.js, Go has been praised by many developers for its simplicity, while also being a powerful tool that can handle various development purposes not limited to synchronized services for servers.

This growing trend of switching to Go for 2015 and beyond is clearly being evidenced by the rise in numbers of starred/forked repos on Github that have been written in Go.

Personally, I have used Node.js before in building an instant-messaging application. However, learning callbacks with Javascript was difficult and dealing with it later on was painfully complex to follow. Most of the time I was unsure whether or not the messages were even being emitted from point A to B.

Although I have never used Go, the feedback from the community has encouraged me to try it as an alternative, mostly due to its ease of use, debugging capabilities, and simple-to-read documentations.

### Sources:

[1] [https://medium.com/@shijuvar/web-development-trends-for-2015-and-beyond-c2d3c1ef5718](https://medium.com/@shijuvar/web-development-trends-for-2015-and-beyond-c2d3c1ef5718)

[2] [http://www.k2bindia.com/golang-the-future-of-web-programming-language/](http://www.k2bindia.com/golang-the-future-of-web-programming-language/)

[3]  [https://www.topcoder.com/blog/google-go-or-node-js-for-web-development-which-is-better/](https://www.topcoder.com/blog/google-go-or-node-js-for-web-development-which-is-better/)

[4] [https://www.reddit.com/r/golang/comments/1ye3z6/go_vs_nodejs_for_servers/](https://www.reddit.com/r/golang/comments/1ye3z6/go_vs_nodejs_for_servers/)

[5] [https://medium.com/@tjholowaychuk/farewell-node-js-4ba9e7f3e52b](https://medium.com/@tjholowaychuk/farewell-node-js-4ba9e7f3e52b)

[6] [https://golang.org/project/](https://golang.org/project/)

[7] [https://nodejs.org/](https://nodejs.org/)

.center {
  text-align: center;
}
