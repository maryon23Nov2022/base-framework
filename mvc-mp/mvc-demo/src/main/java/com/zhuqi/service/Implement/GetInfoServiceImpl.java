package com.zhuqi.service.Implement;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.zhuqi.controller.Code;
import com.zhuqi.controller.Result;
import com.zhuqi.mapper.UserMapper;
import com.zhuqi.pojo.User;
import com.zhuqi.service.GetInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GetInfoServiceImpl implements GetInfoService{
    @Autowired
    private UserMapper userMapper;

    @Override
    public Result getInfo(User user){
        QueryWrapper<User> queryWrapper = new QueryWrapper<>(user);
        System.out.printf("%s: %s\n", "GetInfoServiceImpl", user);
        List<User> users = userMapper.selectList(queryWrapper);
        for (User u : users){
            System.out.printf("%d %s\n", u.getId(), u.getUsername());
        }
        return new Result(Code.OK, users, "");
    }
}
