import { sliderItems } from "../../data/dummyData";

export default function handler(req, res) {
  res.status(200).json(sliderItems);
}
