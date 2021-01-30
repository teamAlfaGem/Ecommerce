package lk.phoneix.v1.demo.payloads.request;

public class SaveCartRequest {

    private long userId;

    private long productId;

    private int qty;

    public long getUserId() {
        return userId;
    }

    public long getProductId() {
        return productId;
    }

    public int getQty() {
        return qty;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public void setProductId(long productId) {
        this.productId = productId;
    }

    public void setQty(int qty) {
        this.qty = qty;
    }
}
