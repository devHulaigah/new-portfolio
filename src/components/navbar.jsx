export default function Navbar() {
  return (
    <>
      {/* navbar container flex */}
      <div className="flex justify-between border-b-4 p-1 bg-[#172d44]">
        {/* icon & text container */}
        <div className="flex justify-start items-center pl-5">
          <div className="text-white pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-display"
              viewBox="0 0 16 16"
            >
              <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4q0 1 .25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75Q6 13 6 12H2s-2 0-2-2zm1.398-.855a.76.76 0 0 0-.254.302A1.5 1.5 0 0 0 1 4.01V10c0 .325.078.502.145.602q.105.156.302.254a1.5 1.5 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.76.76 0 0 0 .254-.302 1.5 1.5 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.76.76 0 0 0-.302-.254A1.5 1.5 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145" />
            </svg>
          </div>
        </div>
        {/* navbar tabs container */}
        <div className=" h-10 text-white flex justify-end">
          {/* component flex */}
          <div className="flex justify-center  font-bold gap-2">
            {["About", "Project", "Languages", "Certificates"].map(
              (i, keyIndex) => (
                <div
                  className="text-white border-2 p-1 rounded-xl hover:bg-white hover:underline hover:text-black "
                  key={keyIndex}
                >
                  {i}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
