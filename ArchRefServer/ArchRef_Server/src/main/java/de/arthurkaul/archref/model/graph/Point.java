package de.arthurkaul.archref.model.graph;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlType;

import org.eclipse.persistence.oxm.annotations.XmlInverseReference;

import com.fasterxml.jackson.annotation.JsonBackReference;

import de.arthurkaul.archref.constants.Constants;
import de.arthurkaul.archref.model.Base;

/*******************************************************************************************************************************************************************************************************
 *
 * @class - <Point> - A point in a coordinate system used for drawing
 *
 * @field - float x - X-Position in a Cartesian coordinate system
 * @field - float y - Y-Position in a Cartesian coordinate system
 *
 * @author - Arthur Kaul
 *
 ******************************************************************************************************************************************************************************************************/

@Entity
@Table(name = "POINT")
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "tPoint")
public class Point extends Base {

	/***************************************************************************************************************************************************************************************************
	 * 
	 * @fields
	 * 
	 ***************************************************************************************************************************************************************************************************/

	@Column(name = "X")
	@XmlAttribute(name = "x")
	private float x = Constants.NODEWIDTH / 2;

	@Column(name = "Y")
	@XmlAttribute(name = "y")
	private float y = Constants.NODEHEIGHT / 2;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "PATH_ID")
	@JsonBackReference(value = "path-point")
	@XmlInverseReference(mappedBy = "points")
	private Path path;

	/***************************************************************************************************************************************************************************************************
	 * 
	 * @getter / @setter Getter and Setter for the fields
	 * 
	 ***************************************************************************************************************************************************************************************************/

	public float getX() {
		return x;
	}

	public void setX(float x) {
		this.x = x;
	}

	public float getY() {
		return y;
	}

	public void setY(float y) {
		this.y = y;
	}

	public Point clone(Path path) {
		Point point = new Point();
		point.setX(this.x);
		point.setY(this.y);
		point.setPath(this.path);
		return point;
	}

	public Path getPath() {
		return path;
	}

	public void setPath(Path path) {
		this.path = path;
	}

}