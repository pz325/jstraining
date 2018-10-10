# State 2 - Project 2

Setup a task for the affine cipher

## Task 1

1. Start from [Project 1 of Stage 2](Project1.md)
1. Use the following data to define a task

```
task: {
    input: "some input text",
    a: 2,
    b: 2
}
```

1. The affine cipher is able to load and run the defined task
1. The ciphertext should appear on the same page

## Task 2

1. Define task in XML format.
1. The affine cipher can also with XML task configuration.

## Task 3

1. Make a `task.json`, which contains task definition in JSON
1. Host `task.json` as a static resource in the Web Server
1. With a `Load task` button, the affine cipher application can load `task.json` remotely from the Web Server at runtime, and excute the task.
