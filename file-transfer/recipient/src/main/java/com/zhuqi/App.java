package com.zhuqi;

import java.io.File;
import java.io.IOException;

public class App
{
    public static void main(String[] args) throws IOException{
        File file = new File("C:/Users/zhuqi/Pictures/Screenshots");
        System.out.printf("%d\n", file.length());
        File creation = new File("C:\\Users\\zhuqi\\Desktop\\2022-2023-2\\basic-framework\\file-transfer\\recipient\\src\\data.txt");
        System.out.printf("%b\n", creation.createNewFile());
        System.out.printf("%b\n", creation.delete());
        File dir = new File("C:\\Users\\zhuqi\\Desktop\\2022-2023-2\\basic-framework\\file-transfer\\recipient\\src\\abc");
        System.out.printf("%b\n", dir.mkdirs());
        System.out.printf("%b\n", dir.delete());
        System.out.println("Hello World!");
    }
}
