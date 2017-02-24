---
layout: post
title: "Get Going with Go!"
date: 2017-02-24 21:05:06 +0200
comments: true
category: Dev
tags: Go Basics
author: thomas torggler
updated: false
---

Everyone is talking about Go these days so I decided to have a look at it and see what it could do for me. 

<!-- more -->

# Basics

So what is Go? Well according to [golang.org](https://golang.org) > Go is an open source programming language that makes it easy to build simple, reliable, and efficient software.

Ok, so another programing language, why do I care you ask? Well that's a story for another day, for now, let's say that I'm just generally interested in awesome technology.

# Installing on macOS

The first "Hello World" kind of program can easily be done using [tour.golang.org](https://tour.golang.org) but I wanted to get it up and running on my MacBook so I installed the package using brew, it's easy enough with: `brew install go`

Afterwards, a quick `go version` confirmed that the latest and greatest version of Go has been installed. 1.8 at the time of writing.

`go version go1.8 darwin/amd64`

# Environment Variables

Before firing up an editor, some environment variables need to be set in order for Go to work and store projects and dependencies in some user-defined path. I've added the following to lines to my bash profile:

```
export GOPATH=$HOME/git/go
export GOBIN=$(go env GOPATH)/bin
export PATH=$PATH:$GOBIN
```

What this does, is setting the GOPATH and GOBIN environment variables to a folder in my home directory and adding the GOBIN directory to the systems' PATH variable. 
The first variable instructs Go to look for and install sources and packages in the specified folder, the second variable defines where binaries are located and adding this to the systems' PATH simply makes running Go programs easier.

# Hello World with Visual Studio Code

On the Mac, I'm mostly using [VS Code](https://code.visualstudio.com) to write/edit text files, as it has some extensions for Go, I figured it would do the trick for the beginning. So I opened up my GOPATH directory in VS Code and created a new folder under `src`, `hello` in my case. 
In this folder I created a `hello.go` file, and at this point, Visual Studio Code recognises the Go language and downloads some required tools to the GOPATH directory. 

After a restart, I created the following hello world program:

```go
package main

import "fmt"

// SayHelloTo takes a string and prints it to the console.
func SayHelloTo(s string) {
	fmt.Println("Hello " + s + "!")
}

// The main function just invokes SayHelloTo with a string
func main() {
	SayHelloTo("Tom")
}
```

# Run / Build / Install

To run the above program, just change into the `hello` folder and run `go run hello.go` which should result in the following output:

```
ttor$ go run hello.go
Hello Tom!
```

Now if I wanted to create a binary and install it, I could simply run `go build hello.go` which leaves me with the executable file. To install it, into Go's bin directory (GOBIN) I use: `go install hello.go`

After that, I can run `hello` and again get the above output:

```
ttor$ hello
Hello Tom!
```

Well that was my quick introduction to Go, we'll soon see if there's more to come...

Nice weekend!
Tom
