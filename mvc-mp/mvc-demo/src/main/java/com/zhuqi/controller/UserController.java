package com.zhuqi.controller;

import com.alibaba.fastjson2.JSON;
import com.zhuqi.pojo.User;
import com.zhuqi.service.DeleteService;
import com.zhuqi.service.GetInfoService;
import com.zhuqi.service.LoginService;
import com.zhuqi.service.UpdateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

//Use annotation to define bean
@RestController
@RequestMapping(value = {"/users"})
//@RequestMapping(value = {"/users"}, produces = {"application/json;charset=utf-8"})
public class UserController{
    @Autowired
    private LoginService loginService;
    @Autowired
    private GetInfoService getInfoService;
    @Autowired
    private UpdateService updateService;
    @Autowired
    private DeleteService deleteService;


    @GetMapping
    public Result getUser(String req){
        User user = JSON.parseObject(req, User.class);
        return getInfoService.getInfo(user);
    }

    @PostMapping
    public Result addUser(@RequestBody User user){
        return loginService.addUser(user);
    }

    @PutMapping
    public Result updateUser(@RequestBody User user){
        return updateService.updateUser(user);
    }

    @DeleteMapping
    public Result deleteUser(@RequestBody User user){
        return deleteService.deleteUser(user);
    }
}