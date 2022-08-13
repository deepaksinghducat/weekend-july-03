import Child from "./Child";

function Parent() {
  const name = "Parent";

  const parentFun = (data) => {
	console.log(data);
  }

  return (
    <div>
      <Child name={name} parentFun={parentFun}/>
    </div>
  );
}

export default Parent;
