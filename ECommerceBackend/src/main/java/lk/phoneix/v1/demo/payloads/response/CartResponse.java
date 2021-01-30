package lk.phoneix.v1.demo.payloads.response;

public class CartResponse {
    private long id;
    private int qty;
    private long userId;
    private long productId;

    public CartResponse() {
    }

    public CartResponse(long id, int qty, long userId, long productId) {
        this.id = id;
        this.qty = qty;
        this.userId = userId;
        this.productId = productId;
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
}
