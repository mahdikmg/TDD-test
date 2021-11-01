let url = "/karfarmas/address";

export default ($api) => ({
  getRequests() {
    return $api.get(`${url}`);
  },
  createRequest(payload) {
    return $api.post(`${url}`, payload);
  },
});
