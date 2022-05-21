import { sliderItems } from "../../../data/dummyData";

export default function handler(req, res) {
  const { id } = req.query;
  const post = sliderItems.filter((post) => post.id === parseInt(id));

  if (post) {
    res.status(200).json(post);
  } else {
    res.status(404).end();
  }
}
