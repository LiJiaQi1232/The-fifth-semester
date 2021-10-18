# Koa

## 1.1 Koa介绍

koa是由Express原班人马打造的，致力于成为更小、更富有表现力、更健壮的Web框架。

**特点**

1. 使用koa编写web应用，可免除重复繁琐的回调函数嵌套，极大提高错误处理的效率。
2. koa 不在内核方法中绑定任何中间件，它的特点是优雅、简洁、表达力强、自由度高。
3. 本身代码只有1000多行，仅提供了一个轻量优雅的函数库。

**设计思想**

- 所有功能都可通过插件实现，符合Unix哲学，使得编写Web应用变得得心应手
- 开发思路和express差不多，最大特点就是避免异步嵌套。

## 1.2 Koa的简单使用

**1.在指定文件夹下，打开命令行窗口，初始化项目，**

```
npm init -y
```

**2.下载koa框架 输入以下命令**

```
npm i koa
```

**3.在指定文件夹下，创建一个js文件并编写以下代码**

![](C:\Users\DELL\Desktop\The-fifth-semester\Study_Koa\Day1\Note\assets\1.2.3. koa的简单使用.png)

**4.打开命令行窗口，输入以下命令**

```
node app.js
```

**5. 打开浏览器，访问指定端口 如图所示**

![](C:\Users\DELL\Desktop\The-fifth-semester\Study_Koa\Day1\Note\assets\1.2.5 访问localhost.png)
