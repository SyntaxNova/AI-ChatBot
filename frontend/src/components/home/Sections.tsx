import { motion } from "framer-motion";
import styles from "./Sections.module.css";

type Props = {
	src: string;
	alt: string;
	animateImg: boolean;
	children: any;
	imgStyle: string;
	reverse: boolean;
};

const Section = (props: Props) => {
	const imageVariants = {
		initial: {
			opacity: 0,
			scale: 0.8,
			y: 30,
		},
		animate: {
			opacity: 1,
			scale: 1,
			y: 0,
			transition: {
				delay: 0.8,
				duration: 1.2,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
		hover: {
			scale: 1.05,
			transition: {
				duration: 0.3,
				ease: "easeInOut",
			},
		},
	};

	const contentVariants = {
		initial: {
			x: props.reverse ? 70 : -70,
			opacity: 0,
		},
		animate: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 1.5,
				ease: [0.25, 0.46, 0.45, 0.94],
				staggerChildren: 0.2,
			},
		},
	};

	const childVariants = {
		initial: {
			y: 20,
			opacity: 0,
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.8,
				ease: "easeOut",
			},
		},
	};

	const containerVariants = {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				duration: 0.5,
				staggerChildren: 0.3,
			},
		},
	};

	const floatingAnimation = {
		y: [0, -10, 0],
		transition: {
			duration: 3,
			repeat: Infinity,
			ease: "easeInOut",
		},
	};

	return (
		<motion.div 
			className={props.reverse ? styles.parent_reverse : styles.parent}
			variants={containerVariants}
			initial="initial"
			animate="animate"
			viewport={{ once: true, amount: 0.3 }}
		>
			<motion.div
				variants={contentVariants}
				className={styles.div1}
			>
				<motion.div variants={childVariants}>
					{props.children}
				</motion.div>
			</motion.div>
			
			<motion.div 
				className={styles.div2}
				variants={contentVariants}
			>
				<div className={`${styles.img} ${props.imgStyle}`}>
					<motion.div
						animate={props.animateImg ? floatingAnimation : {}}
					>
						<motion.img
							variants={imageVariants}
							whileHover="hover"
							src={props.src}
							alt={props.alt}
							loading="lazy"
						/>
					</motion.div>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default Section;