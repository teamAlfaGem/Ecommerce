package lk.phoneix.v1.demo.payloads.response;

import lk.phoneix.v1.demo.models.Product;

public class CartResponse {
    private long id;
    private int qty;
    private long userId;
    private long productId;
    private Product product;

    public CartResponse() {
    }

    public CartResponse(long id, int qty, long userId, long productId) {
        this.id = id;
        this.qty = qty;
        this.userId = userId;
        this.productId = productId;
    }

    public CartResponse(long id, int qty, long userId, long productId, Product product) {
        this.id = id;
        this.qty = qty;
        this.userId = userId;
        this.productId = productId;
        this.product = product;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getQty() {
        return qty;
    }

    public void setQty(int qty) {
        this.qty = qty;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public long getProductId() {
        return productId;
    }

    public void setProductId(long productId) {
        this.productId = productId;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
