package com.zhuqi.service.Implement;

import com.zhuqi.controller.Code;
import com.zhuqi.controller.Result;
import com.zhuqi.mapper.UserMapper;
import com.zhuqi.pojo.User;
import com.zhuqi.service.DeleteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DeleteServiceImpl implements DeleteService {
    @Autowired
    private UserMapper userMapper;

    @Override
    public Result deleteUser(User user){
        String msg;
        Integer res;
        res = userMapper.deleteById(user.getId());
        System.out.printf("%s: %d\n", "DeleteServiceImpl", res);
        if(res > 0) msg = "user deleted.";
        else msg = "no such user";
        return new Result(res > 0 ? Code.OK : Code.ERR, res, msg);
    }
}

