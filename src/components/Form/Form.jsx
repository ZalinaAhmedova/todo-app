import { useForm } from "react-hook-form";
import "./Form.css";

function Form({ addTodos }) {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
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
            required: true,
            pattern: /[А-яA-Za-z0-9]$/i,
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
          disabled={!isValid}
        ></input>
        {errors.task?.type === "required" && (<p className="alert" role="alert">This field is required</p>)}
        {errors.task?.type === "pattern" && (<p className="alert" role="alert">This field is required</p>)}
      </form>
    </div>
  );
}

export default Form;
