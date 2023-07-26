import useForm from "./UseForm";

const FORM_ENDPOINT = "https://onsetvback.onrender.com/guests/"; 

function refreshPage() {
  window.location.reload(false);
}


const Form = () => {


  const { handleSubmit, status, message } = useForm();

  if (status === "success") {
    return (
      <>
      <div class="jumbotron"> 
        <a href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=Mmw2bTFnZGZsZ2Y3ZDBjMzJidmoxNmo3Y2Qgc2FteWNyb2NrQG0&tmsrc=samycrock%40gmail.com">
          <button className="btn btn-light">Add to Calendar</button>
        </a>
        <a href="https://goo.gl/maps/SXhMiduoAJne9mgE8">
            <button className="btn btn-light">Get Directions</button>
        </a>
      </div>
      </>
    );
  }

  if (status === "error") {
    return (
      <>
        <div className="text-2xl">Something bad happened!</div>
        <div className="text-md">{message}</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
    >
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Your name"
          name="gname"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="phone"
          placeholder="phone"
          name="phone"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <textarea
          placeholder="Your message"
          name="msg"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
        </div>
      {status !== "loading" && (
        <div className="mb-3 pt-0">
          <button
            className="btn btn-dark"
            type="submit"
            onClick={refreshPage}
          >
            RSVP
          </button>
        </div>
      )}
    </form>
  );
};

export default Form;