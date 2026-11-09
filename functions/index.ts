export default {
	async fetch(): Promise<Response> {
		return Response.json({ message: "Hello from mezotv/portfolio! This is a test to see if this thing is working properly" });
	},
};
