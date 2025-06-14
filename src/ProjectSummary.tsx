interface ProjectSummaryProps {
    publishedUrl: string
    title: string;
    description: string;
    imageUrl: string;
    technologies: string[];
}

export function ProjectSummary(props: ProjectSummaryProps) {
    const { publishedUrl, title, description, imageUrl, technologies } = props;

    return (<article>
        <a
            href={publishedUrl}
            className="image"
        ><img
                src={imageUrl}
                alt="" /></a>
        <div className="inner">
            <h4>{title}</h4>
            <p>
                {description}
            </p>
            <ul>
                {technologies.map((tech: string, index: number) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>
        </div>
    </article>);
}
