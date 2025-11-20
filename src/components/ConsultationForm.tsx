export default function ConsultationForm() {
  return (
    <section
      className="
        max-w-3xl
        mx-auto
        p-6
        bg-linear-to-br
        from-white
        to-slate-50
        rounded-2xl
        lg:shadow-md
        lg:ring-1
        ring-slate-200
      "
    >
      <header
        className="
          mb-6
        "
      >
        <h1
          className="
            text-2xl
            font-semibold
            text-slate-900
            mb-1
          "
        >
          Consultation Request
        </h1>
        <p
          className="
            text-sm
            text-slate-600
          "
        >
          Please provide the contact and pet details below so our team can reply with the best available appointment options.
        </p>
      </header>

      <form
        aria-label="Consultation request form (markup only)"
        className="
          space-y-6
        "
      >
        <fieldset
          className="
            p-4
            bg-white
            border
            border-slate-100
            rounded-lg
            shadow-sm
          "
        >
          <legend
            className="
              text-sm
              font-medium
              text-slate-800
              mb-2
            "
          >
            Contact information
          </legend>

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-4
            "
          >
            <div>
              <label
                htmlFor="fullName"
                className="
                  block
                  text-sm
                  font-medium
                  text-slate-700
                  mb-1
                "
              >
                Full name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Alex Taylor"
                className="
                  block
                  w-full
                  px-3
                  py-2
                  border
                  border-slate-200
                  rounded-md
                  text-slate-900
                  placeholder-slate-400
                  focus:outline-none
                  focus:ring-2
                  focus:ring-(--accent-color)
                "
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="
                  block
                  text-sm
                  font-medium
                  text-slate-700
                  mb-1
                "
              >
                Phone number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(123) 456-7890"
                className="
                  block
                  w-full
                  px-3
                  py-2
                  border
                  border-slate-200
                  rounded-md
                  text-slate-900
                  placeholder-slate-400
                  focus:outline-none
                  focus:ring-2
                  focus:ring-(--accent-color)
                "
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="
                  block
                  text-sm
                  font-medium
                  text-slate-700
                  mb-1
                "
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="alex@example.com"
                className="
                  block
                  w-full
                  px-3
                  py-2
                  border
                  border-slate-200
                  rounded-md
                  text-slate-900
                  placeholder-slate-400
                  focus:outline-none
                  focus:ring-2
                  focus:ring-(--accent-color)
                "
              />
            </div>

            <div>
              <label
                htmlFor="timezone"
                className="
                  block
                  text-sm
                  font-medium
                  text-slate-700
                  mb-1
                "
              >
                Time zone
              </label>
              <select
                id="timezone"
                name="timezone"
                defaultValue=""
                className="
                  block
                  w-full
                  px-3
                  py-2
                  border
                  border-slate-200
                  rounded-md
                  text-slate-900
                  bg-white
                  focus:outline-none
                  focus:ring-2
                  focus:ring-(--accent-color)
                "
              >
                <option value="" disabled>
                  Select time zone
                </option>
                <option value="UTC-8">Pacific Time (UTC-8)</option>
                <option value="UTC-7">Mountain Time (UTC-7)</option>
                <option value="UTC-6">Central Time (UTC-6)</option>
                <option value="UTC-5">Eastern Time (UTC-5)</option>
                <option value="UTC+0">UTC</option>
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset
          className="
            p-4
            bg-white
            border
            border-slate-100
            rounded-lg
            shadow-sm
          "
        >
          <legend
            className="
              text-sm
              font-medium
              text-slate-800
              mb-2
            "
          >
            Pet information
          </legend>

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-3
              gap-4
              items-end
            "
          >
            <div>
              <label
                htmlFor="petName"
                className="
                  block
                  text-sm
                  font-medium
                  text-slate-700
                  mb-1
                "
              >
                Pet name
              </label>
              <input
                id="petName"
                name="petName"
                type="text"
                placeholder="Buddy"
                className="
                  block
                  w-full
                  px-3
                  py-2
                  border
                  border-slate-200
                  rounded-md
                  text-slate-900
                  placeholder-slate-400
                  focus:outline-none
                  focus:ring-2
                  focus:ring-(--accent-color)
                "
              />
            </div>

            <div>
              <label
                htmlFor="petType"
                className="
                  block
                  text-sm
                  font-medium
                  text-slate-700
                  mb-1
                "
              >
                Pet type
              </label>
              <select
                id="petType"
                name="petType"
                defaultValue=""
                className="
                  block
                  w-full
                  px-3
                  py-2
                  border
                  border-slate-200
                  rounded-md
                  text-slate-900
                  bg-white
                  focus:outline-none
                  focus:ring-2
                  focus:ring-(--accent-color)
                "
              >
                <option value="" disabled>
                  Select type
                </option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="bird">Bird</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="petAge"
                className="
                  block
                  text-sm
                  font-medium
                  text-slate-700
                  mb-1
                "
              >
                Age (years)
              </label>
              <input
                id="petAge"
                name="petAge"
                type="number"
                min="0"
                placeholder="3"
                className="
                  block
                  w-full
                  px-3
                  py-2
                  border
                  border-slate-200
                  rounded-md
                  text-slate-900
                  placeholder-slate-400
                  focus:outline-none
                  focus:ring-2
                  focus:ring-(--accent-color)
                "
              />
            </div>
          </div>
        </fieldset>

        <div
          className="
            md:flex
            md:items-center
            md:justify-between
            space-y-4
          "
        >
          <p
            className="
              text-sm
              text-slate-600
            "
          >
            We'll review and reach out with next steps.
          </p>

          <div>
            <button
              type="button"
              className="
                bg-(--accent-color-blue-sky)
                hover:bg-(--accent-color-blue-sky-dark)
               text-white
                rounded-2xl
                h-10
                px-4
                py-2
                text-center
                w-full md:w-auto
                transition-colors
                duration-150
                sm:w-full
              "
            >
              Request consultation
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}