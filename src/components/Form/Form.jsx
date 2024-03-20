import { useForm } from "react-hook-form";
import "./Form.css";

function Form({ addTodos }) {

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange"
  });

  const onSubmit = (data) => {
    addTodos(data.task);
    reset();
  };

  return (
    <div>
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="form-container"
        >
        <input
          {...register("task", {
            required: true
          })}
          type="text"
          placeholder="Add your new todo"
          className="form-input"
          id="textInput"
        ></input>
        <input 
          type="submit" 
          className="form-button" 
          value="Add"
        ></input>
      </form>
    </div>
  );
}

export default Form;
