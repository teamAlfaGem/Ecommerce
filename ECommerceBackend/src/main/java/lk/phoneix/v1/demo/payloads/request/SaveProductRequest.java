package lk.phoneix.v1.demo.payloads.request;

import org.springframework.web.multipart.MultipartFile;

public class SaveProductRequest {
    private MultipartFile file;
    private String pname;
    private String brand;
    private String category;
    private double price;
    private int qty;
    private boolean isFeatured;
    private String description;
    private String imageName;
    private String uploadDir;
    private String keyWords;


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

    public int getQty() {
        return qty;
    }

    public boolean isFeatured() {
        return isFeatured;
    }

    public void setFile(MultipartFile file) {
        this.file = file;
    }

    public void setPname(String pname) {
        this.pname = pname;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public void setQty(int qty) {
        this.qty = qty;
    }

    public void setFeatured(boolean featured) {
        isFeatured = featured;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setImageName(String imageName) {
        this.imageName = imageName;
    }

    public void setUploadDir(String uploadDir) {
        this.uploadDir = uploadDir;
    }

    public void setKeyWords(String keyWords) {
        this.keyWords = keyWords;
    }
}
