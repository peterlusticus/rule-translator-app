export function TextareaText(props: any) {
    const handleChange = (event: any) => {
        console.log(event.target.value)
    };

    return (
        <div>
            <textarea rows={4} name="comment" id="comment" className="form-input block w-full sm:text-sm border-gray-300" defaultValue={''} />
        </div>
    )
}
