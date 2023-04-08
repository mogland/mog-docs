import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "experimental-edge",
};

export default async function (req) {
  const { searchParams } = new URL(req.url);
  const hasTitle = searchParams.has("title");
  const title = hasTitle
    ? searchParams.get("title")?.slice(0, 100)
    : "Mog Documentation";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: 80,
          backgroundColor: "#F7DCB4",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)",
          backgroundSize: "100px 100px",
          backgroundPosition: "-30px -10px",
          fontWeight: 600,
          color: "#383838",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: 70,
            left: 80,
          }}
        >
          <svg
            height="60"
            viewBox="0 0 500 500"
            version="1.1"
            style={{
              border: "1px solid #5a5a5a7a",
              borderRadius: "1rem",
            }}
          >
            <g stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
              <g transform="translate(-84.000000, -84.000000)">
                <g transform="translate(78.000000, 84.000000)">
                  <rect
                    fill="#F7DCB4"
                    x="6"
                    y="0"
                    width="500"
                    height="500"
                    rx="75"
                  ></rect>
                  <g transform="translate(0.000000, 23.000000)">
                    <ellipse
                      fill="#3F3F3F"
                      fillRule="nonzero"
                      cx="154"
                      cy="186"
                      rx="51"
                      ry="57"
                    ></ellipse>
                    <ellipse
                      fill="#3F3F3F"
                      fillRule="nonzero"
                      cx="358"
                      cy="186"
                      rx="51"
                      ry="57"
                    ></ellipse>
                    <ellipse
                      fill="#FFFFFF"
                      fillRule="nonzero"
                      cx="138.5"
                      cy="182"
                      rx="17.5"
                      ry="18"
                    ></ellipse>
                    <ellipse
                      fill="#FFFFFF"
                      fillRule="nonzero"
                      cx="341.5"
                      cy="182"
                      rx="17.5"
                      ry="18"
                    ></ellipse>
                    <ellipse
                      fill="#3F3F3F"
                      fillRule="nonzero"
                      cx="256.5"
                      cy="254"
                      rx="20.5"
                      ry="18"
                    ></ellipse>
                    <path
                      d="M236,300 C249.666667,330.666667 263.333333,330.666667 277,300"
                      id="路径"
                      stroke="#3F3F3F"
                      strokeWidth="8"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          <span
            style={{
              fontWeight: 900,
              marginLeft: "0.5rem",
              fontSize: 40,
            }}
          >
            Mog
          </span>
        </span>
        <p
          style={{
            position: "absolute",
            bottom: 70,
            left: 80,
            margin: 0,
            fontSize: 30,
            letterSpacing: -1,
          }}
        >
          🏝 A flexible, modular CMS Blog System.
        </p>
        <h1
          style={{
            fontSize: 82,
            margin: "0 0 40px -2px",
            lineHeight: 1.1,
            // textShadow: '0 2px 30px #000',
            letterSpacing: -4,
            // backgroundImage: 'linear-gradient(-90deg, #b4b4b4 10%, #38383)',
            // backgroundClip: 'text',
            // '-webkit-background-clip': 'text',
            // color: 'transparent'
          }}
        >
          📃 {title}
        </h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      emoji: "fluent",
    }
  );
}
