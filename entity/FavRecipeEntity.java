package appdevproject.cookchum.entity;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.time.LocalDate;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
@Entity
@Table(name="favoriterecipe")
public class FavRecipeEntity {
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		@Column(name = "favoriteId")
		private int favoriteId;
		
		@JsonProperty("userId")
		private int userId;
		@JsonProperty("recipeId")
		private int recipeId;
		
		private int rating;
		private LocalDate dateAdded;
		
		public FavRecipeEntity() {
			super();
		}	

		public FavRecipeEntity(int favoriteId,int userId,int recipeId,int rating,LocalDate dateAdded) {
			super();
			this.favoriteId=favoriteId;
			this.userId = userId;
			this.recipeId = recipeId;
			this.rating = rating;
			this.dateAdded=dateAdded;
		}
		
		
		public void setFavoriteId(int favoriteId) {
			this.favoriteId=favoriteId;
		}
		public void setUserId(int userId) {
			this.userId=userId;
		}
		public void setRecipeId(int recipeId) {
			this.recipeId=recipeId;
		}
		public void setRating(int rating) {
			this.rating=rating;
		}
		public void setDateAdded(LocalDate dateAdded) {
			this.dateAdded=dateAdded;
		}
		public int getFavoriteId(){
			return favoriteId;
		}
		public int getUserId(){
			return userId;
		}
		public int getRecipeId(){
			return recipeId;
		}
		public int getRating() {
			return rating;
		}
		public LocalDate getDateAdded() {
			return dateAdded;
		}
		
}