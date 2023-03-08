package com.zhuqi.controller;

import com.zhuqi.service.file.ReceiveService;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.annotation.MultipartConfig;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.http.HttpResponse;

@RestController
@RequestMapping("/files")
public class FileController{
    @Autowired
    private ReceiveService receiveService;

    @PostMapping
    public Result receive(MultipartFile fileChosen, MultipartFile imgChosen, String modelName) throws IOException{
        System.out.printf("%s: %s\n", "FileController", fileChosen);
        System.out.printf("%s: %s\n", "FileController", imgChosen);
        System.out.printf("%s: %s\n", "FileController", modelName);
        return new Result(Code.OK, null, null);
//        return receiveService.receiveFile(fileChosen);
    }

    @GetMapping(produces = {"application/octet-stream;charset=utf-8"})
    public byte[] sendFile(Integer id, HttpServletResponse httpServletResponse) throws IOException{
        System.out.printf("%s: %s\n", "FileController", httpServletResponse.getHeader("Access-Control-Allow-Headers"));
        httpServletResponse.setHeader("Content-Disposition", "attachment;filename=downloaded.jpg");
        System.out.printf("%s: %d\n", "FileController", id);
        InputStream inputStream = new FileInputStream("C:\\Users\\zhuqi\\Desktop\\2022-2023-2\\basic-framework\\mvc-mp\\mvc-demo\\src\\6\\github\\github.jpg");
        return IOUtils.toByteArray(inputStream);
    }
}
