import React, { useRef, useState } from "react";

const EventsExample = () => {
	const [value, setValue] = useState<string>("");
	const [isDrag, setIsDrag] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement>(null);

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		console.log(inputRef.current?.value);
	};

	const dragHandller = (e: React.DragEvent<HTMLDivElement>) => {
		console.log("DRAG");
	};

	const dragWithPreventHander = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDrag(true);
	};

	const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDrag(false);
	};

	const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDrag(false);
		console.log("DRAG");
	};

	return (
		<div>
			<input
				value={value}
				onChange={changeHandler}
				type='text'
				placeholder='управляемый'
			/>
			<input ref={inputRef} type='text' placeholder='неуправляемый' />
			<button onClick={clickHandler}>WER</button>
			<div
				onDrag={dragHandller}
				draggable
				style={{ width: 200, height: 200, background: "red" }}
			></div>
			<div
				onDrop={dropHandler}
				onDragLeave={leaveHandler}
				onDragOver={dragWithPreventHander}
				style={{
					width: 200,
					height: 200,
					background: isDrag ? "blue" : "red",
					marginTop: 20,
				}}
			></div>
		</div>
	);
};

export default EventsExample;
