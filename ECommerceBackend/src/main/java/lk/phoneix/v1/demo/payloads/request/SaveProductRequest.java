package lk.phoneix.v1.demo.payloads.request;

import org.springframework.web.multipart.MultipartFile;

public class SaveProductRequest {
    private MultipartFile file;
    private String pname;
    private String brand;
    private String category;
    private double price;
    private String description;
    private String imageName;
    private String uploadDir;
    private String keyWords;

    public SaveProductRequest(MultipartFile file, String pname, String brand, String category, double price, String description, String imageName, String uploadDir, String keyWords) {
        this.file = file;
        this.pname = pname;
        this.brand = brand;
        this.category = category;
        this.price = price;
        this.description = description;
        this.imageName = imageName;
        this.uploadDir = uploadDir;
        this.keyWords = keyWords;
    }

    public MultipartFile getFile() {
        return file;
    }

    public String getPname() {
        return pname;
    }

    public String getBrand() {
        return brand;
    }

    public String getCategory() {
        return category;
    }

    public double getPrice() {
        return price;
    }

    public String getDescription() {
        return description;
    }

    public String getImageName() {
        return imageName;
    }

    public String getUploadDir() {
        return uploadDir;
    }

    public String getKeyWords() {
        return keyWords;
    }
}
