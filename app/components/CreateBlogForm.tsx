import { useState, ChangeEvent, FormEvent } from "react";

const CreateBlogForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    publicationDate: "",
    smallDescription: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="publicationDate" className="block text-gray-700 font-bold mb-2">
          Publication Date
        </label>
        <input
          type="text"
          id="publicationDate"
          name="publicationDate"
          value={formData.publicationDate}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="smallDescription" className="block text-gray-700 font-bold mb-2">
          Small Description
        </label>
        <textarea
          id="smallDescription"
          name="smallDescription"
          value={formData.smallDescription}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2 w-full h-24 resize-none"
        ></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
        Create Blog Post
      </button>
    </form>
  );
};

export default CreateBlogForm;

