---
layout: post
title: "PowerShell and Variable References"
date: 2017-05-18 19:25:06 +0200
comments: true
category: PowerShell
tags: PowerShell
author: thomas torggler
date_modified: 2017-05-23 23:59:19 +0200
---

I've come across an interesting behavior (or feature) of PowerShell the other day. As I don't really understand what's going on, I decided to write it up, maybe someone out there can help explaining this.

<!-- more -->

# Expected

I'm writing a script that contains multiple functions and objects get passed from one function to another. As it happens the functions modify the objects that are passed in and output the modified information. So far so good, but what I found is, that the original object gets updated. So in the end I don't need the function to output anything and can just carry on using the passed-in object.

Confused? Well I am, so let's try it with an example: 

```powershell
$var = 1
function Update-Value ([int]$InputObject) {
    $InputObject++
    Write-Output $InputObject
}
```

In the above example we define a variable with a value of 1 and a simple function that increases the value by 1 and outputs the increased value. That works as I would have expected, if we run the code, the output is:

```powershell
C:\> Update-Value $var
2
C:\> $var
1
```

# Unexpected

Now if we do the same exercise with an object instead of a simple integer, the outcome is not exactly as I would have expected it to be. Here goes another example:

```powershell
$obj = New-Object -TypeName psobject -Property ([ordered]@{ a=1; b=2; c=3; })
function Update-Value ([psobject]$InputObject) {
    $InputObject.a++
    Write-Output $InputObject
}
```

The idea is basically the same as above, the variable in this case contains a custom object with three properties: a, b, c. The function is still increasing the value on the input object, only that now we access the "a" property and increase it's value.

The output is as follows:

```powershell
C:\> Update-Value $obj
a b c
- - -
2 2 3

C:\> $obj
a b c
- - -
2 2 3
```

Now apparently the variable `$obj` gets updated as well. While in the first example, the integer in `$var` did not change, i.e. after running the function it was still 1, the value of `$obj.a` does change when I run the function.  

In my script I just decided to change the function so that it does no longer output the modified object and instead, I just call the function and carry on with my original variable. I do think the variable referencing in memory might be different when using a single integer vs. an object. It works for now, but as stated above, I don't understand why and that worries me to some degree...


Thanks to anyone who cares to comment and offer an explanation!

Tom


# Update

After posting this to [/r/PowerShell](https://www.reddit.com/r/PowerShell/comments/6c3e7n/i_found_this_behavior_strange_anyone_care_to/) someone referred me to [this thread](https://www.reddit.com/r/PowerShell/comments/6bqn63/why_does_readonly_variable_update_with_new_data/) which explains the behavior quite well. 

The variable `$InputObject` in my case does not contain the object but is just a pointer to `$obj`, which is therefore updated directly.
