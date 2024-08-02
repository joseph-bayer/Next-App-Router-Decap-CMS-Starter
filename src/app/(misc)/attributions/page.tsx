import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Attributions",
};

export default function Attributions() {
  return (
    <ul>
      <li>
        <span>Cow Background SVG:</span>
        <a href="https://www.vecteezy.com/free-vector/cow-print">
          Cow Print Vectors by Vecteezy
        </a>
      </li>
      <li>
        <span>Cactus Background Highlight SVGs:</span>
        <a href="https://www.vecteezy.com/free-vector/cactus-silhouette">
          Cactus Silhouette Vectors by Vecteezy
        </a>
      </li>
      <li>
        <span>Wagon Wheel SVG:</span>
        <a href="https://www.vecteezy.com/free-vector/wagon-wheel">
          Wagon Wheel Vectors by Vecteezy
        </a>
      </li>
    </ul>
  );
}
