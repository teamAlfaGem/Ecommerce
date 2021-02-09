package lk.phoneix.v1.demo.payloads.response;

public class PurchasedResponse {

    private String message;

    public PurchasedResponse() {
    }

    public PurchasedResponse(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
