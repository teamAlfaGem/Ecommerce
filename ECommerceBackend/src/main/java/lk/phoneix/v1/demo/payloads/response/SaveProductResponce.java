package lk.phoneix.v1.demo.payloads.response;

public class SaveProductResponce {

    private String pname;
    private String brand;
    private String category;
    private double price;
    private int qty;
    private String description;
    private String imageName;
    private String uploadDir;
    private String keyWords;
    private String imgDownloadUri;
    private long size;

    public SaveProductResponce(String pname, String brand, String category, double price, int qty, String description, String imageName, String uploadDir, String keyWords, String imgDownloadUri, long size) {
        this.pname = pname;
        this.brand = brand;
        this.category = category;
        this.price = price;
        this.qty = qty;
        this.description = description;
        this.imageName = imageName;
        this.uploadDir = uploadDir;
        this.keyWords = keyWords;
        this.imgDownloadUri = imgDownloadUri;
        this.size = size;
    }

    public int getQty() {
        return qty;
    }

    public void setQty(int qty) {
        this.qty = qty;
    }

    public String getPname() {
        return pname;
    }

    public void setPname(String pname) {
        this.pname = pname;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageName() {
        return imageName;
    }

    public void setImageName(String imageName) {
        this.imageName = imageName;
    }

    public String getUploadDir() {
        return uploadDir;
    }

    public void setUploadDir(String uploadDir) {
        this.uploadDir = uploadDir;
    }

    public String getKeyWords() {
        return keyWords;
    }

    public void setKeyWords(String keyWords) {
        this.keyWords = keyWords;
    }

    public String getImgDownloadUri() {
        return imgDownloadUri;
    }

    public void setImgDownloadUri(String imgDownloadUri) {
        this.imgDownloadUri = imgDownloadUri;
    }

    public long getSize() {
        return size;
    }

    public void setSize(long size) {
        this.size = size;
    }
}
