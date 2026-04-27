export type Field = {
  label: string;
  placeholder?: string;
  type?: 'text' | 'number' | 'date' | 'textarea' | 'select';
  options?: string[];
};

export function CrudForm({ title, description, fields }: Readonly<{ title: string; description: string; fields: Field[] }>) {
  return (
    <form className="form-card">
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="form-grid">
        {fields.map((field) => (
          <label className={field.type === 'textarea' ? 'wide' : undefined} key={field.label}>
            <span>{field.label}</span>
            {field.type === 'textarea' ? (
              <textarea placeholder={field.placeholder} rows={4} />
            ) : field.type === 'select' ? (
              <select defaultValue="">
                <option value="" disabled>
                  เลือก{field.label}
                </option>
                {field.options?.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            ) : (
              <input placeholder={field.placeholder} type={field.type ?? 'text'} />
            )}
          </label>
        ))}
      </div>
      <div className="form-actions">
        <button className="button secondary" type="button">
          บันทึก draft
        </button>
        <button className="button primary" type="button">
          บันทึกข้อมูล
        </button>
      </div>
    </form>
  );
}
