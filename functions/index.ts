export default {
	async fetch(): Promise<Response> {
		return Response.json({ message: "Hello from mezotv/portfolio!" });
	},
};
